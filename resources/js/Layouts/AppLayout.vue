<template>
    <div>
        <jet-banner />
        <div class="min-h-screen bg-gray-100">
            <nav class="bg-white border-b border-gray-100">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <!-- Hamburger -->
                        <div class="-mr-2 flex items-center lg:hidden">
                            <button @click="showingNavigationDropdown = !showingNavigationDropdown" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition">
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path :class="{'hidden': showingNavigationDropdown, 'inline-flex': !showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    <path :class="{'hidden': !showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex">
                            <!-- Logo -->
                            <div class="flex-shrink-0 flex items-center lg:-my-px lg:flex">
                                <inertia-link :href="route('profile.show')">
                                    <div class="block h-9 w-auto">
                                        <img src="/webcourses/publisher-files/1/theme/logo.svg" alt="System Logo" style="max-height: 2.3rem;">
                                    </div>
                                </inertia-link>
                            </div>
                        </div>

                        <div class="sm:flex sm:items-center sm:ml-6">
                            <inertia-link :href="route('profile.show')" class="mr-5 py-3 mt-2 leading-3 text-clip overflow-hidden max-w-[11rem] font-normal">
                                <div class="hidden border border-transparent sm:flex justify-end text-amber-500">{{ $page.props.auth.user.username }}</div>
                                <div class="hidden border border-transparent sm:flex justify-end text-xs text-blue-900">{{ $page.props.auth.user.email }}</div>
                            </inertia-link>
                        </div>

                        <jet-dropdown align="right" width="52">
                            <template #trigger>
                                <button class="inline-flex items-center py-3 border border-transparent text-sm leading-4 font-medium rounded-md text-amber-500 bg-white focus:outline-none transition">
                                    <img class="h-9 w-auto rounded-full object-cover" :src="$page.props.auth.user.profile_photo_url"/>
                                    <font-awesome-icon icon="fa-solid fa-caret-down" class="ml-1 text-gray-700" />
                                </button>
                            </template>
                            <template #content>
                                <!-- Learner and profile menu items -->
                                <jet-dropdown-link :href="('/user/redirect')" class="items-center">
                                    <div class="inline-flex px-2 py-1">
                                        Webcourses
                                    </div>
                                </jet-dropdown-link>
                                <div class="border-t border-gray-100"></div>
                                <!-- Authentication -->
                                <form @submit.prevent="logout">
                                    <jet-dropdown-link as="button" class="items-center"  >
                                        <div class="inline-flex px-2 py-1">
                                            Sign Out
                                        </div>
                                    </jet-dropdown-link>
                                </form>
                            </template>
                        </jet-dropdown>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header class="bg-white shadow" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header"></slot>
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script>
    import JetApplicationMark from '@/Jetstream/ApplicationMark'
    import JetBanner from '@/Jetstream/Banner'
    import JetDropdown from '@/Jetstream/Dropdown'
    import JetDropdownLink from '@/Jetstream/DropdownLink'
    import JetNavLink from '@/Jetstream/NavLink'
    import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink'

    export default {
        components: {
            JetApplicationMark,
            JetBanner,
            JetDropdown,
            JetDropdownLink,
            JetNavLink,
            JetResponsiveNavLink,
        },
        data() {
            return {
                showingNavigationDropdown: false,
            }
        },
        methods: {
            switchToTeam(team) {
                this.$inertia.put(route('current-team.update'), {
                    'team_id': team.id
                }, {
                    preserveState: false
                })
            },
            logout() {
                this.$inertia.post(route('logout'));
            },
        }
    }
</script>
