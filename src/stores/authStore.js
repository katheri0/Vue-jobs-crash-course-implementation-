import { defineStore } from 'pinia'
import { loginUser, getAuthenticatedUser, logoutUser, registerUser } from '@/stores/auth';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        userId: null,
        avatarIndex: 0
    }),
    getters: {
        isLoggedIn: (state) => !!state.user
    },
    actions: {
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
            return user; // ✅ return user so login.vue can use it
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
