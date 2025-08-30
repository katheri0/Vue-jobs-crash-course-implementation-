import { defineStore } from 'pinia'
import { loginUser, getAuthenticatedUser, logoutUser, registerUser } from '@/stores/auth';
import api from '@/services/api';
export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        userId: null,
        avatarIndex: 0
    }),
    getters: {
        isLoggedIn: (state) => !!state.user,
        // Normalize role_id to Number and check
        isAdmin: (state) => Number(state.user?.role_id) === 1,
        isRecruiter: (state) => Number(state.user?.role_id) === 2,
        isSeeker: (state) => Number(state.user?.role_id) === 3,

        // For your card
        canPostJob: (state) => [1, 2].includes(Number(state.user?.role_id))
    },
    actions: {
        async fetchRoleName(roleId) {
            if (!roleId) return null;
            const { data: role } = await api.get(`/roles/${roleId}`);
            return role?.name || "unknown";
        },
        _applyUserSnapshot(userSnapshot) {
            this.user = userSnapshot
            this.userId = userSnapshot?.id ?? null
            this.avatarIndex = userSnapshot?.avatar_index ?? 0
        },

        async login(email, password) {
            const { data: users } = await loginUser(email, password);
            if (users.length === 0) throw new Error("Invalid credentials");

            const user = users[0];
            this._applyUserSnapshot(user);
            return user; //  return user so login.vue can use it
        },

        async register(formData) {
            const { data: newUser } = await registerUser(formData);
            this._applyUserSnapshot(newUser);
            return newUser;
        },

        async fetchUser() {
            if (!this.userId) return;
            const { data } = await getAuthenticatedUser(this.userId);
            this._applyUserSnapshot(data);
        },

        async fetchProfile(query = null) {
            if (query) {
                const { data: users } = await api.get(`/users?email=${query.email}`);
                if (users.length) this._applyUserSnapshot(users[0]);
            } else if (this.userId) {
                const { data } = await getAuthenticatedUser(this.userId);
                this._applyUserSnapshot(data);
            }
        }
        ,
        async logout() {
            await logoutUser();
            this._applyUserSnapshot(null);
        }
    }
});
