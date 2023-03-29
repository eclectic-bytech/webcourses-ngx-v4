<template>
    <div>
        <jet-banner />

        <div class="min-h-screen bg-gray-100">
            <nav class="bg-white border-b border-gray-100">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                           <!-- Hamburger -->
                           <div class="-mr-2 flex items-center sm:hidden">
                            <button @click="showingNavigationDropdown = ! showingNavigationDropdown" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition">
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    <path :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex">
                            <!-- Logo -->
                            <div class="flex-shrink-0 flex items-center sm:-my-px sm:flex">
                                <inertia-link :href="route('profile.show')">
                                    <!--
                                        Preserving this link to help understand Vue, when we move to
                                        writing our of componenets
                                        <jet-application-mark class="block h-9 w-auto" />
                                    -->
                                    <div class="block h-9 w-auto">
                                        <img src="/webcourses/publisher-files/1/theme/logo.svg" alt="System Logo" style="max-height: 2.3rem;">
                                    </div>
                                </inertia-link>
                            </div>

                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <!--
                                <jet-nav-link :href="route('dashboard')" :active="route().current('dashboard')">
                                    Dashboard
                                </jet-nav-link>
                                -->
                                <a class="inline-flex items-center px-1 py-3 border-b-2 border-transparent font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition" href="/webcourses/catalogue">Webcourses</a>
                                <a class="inline-flex items-center px-1 py-3 border-b-2 border-transparent font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition" href="https://publish.cultivatelearning.ca/">Publish</a>
                                <a class="inline-flex items-center px-1 py-3 border-b-2 border-transparent font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition" href="/webcourses/help">Help</a>
                            </div>
                        </div>
                        <div class="sm:flex sm:items-center sm:ml-6">
                            <!--
                            <div class="ml-3 relative">
                                <!~~ Teams Dropdown ~~>
                                <jet-dropdown align="right" width="60" v-if="$page.props.jetstream.hasTeamFeatures">
                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition">
                                                {{ $page.props.user.current_team.name }}

                                                <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <div class="w-60">
                                            <!~~ Team Management ~~>
                                            <template v-if="$page.props.jetstream.hasTeamFeatures">
                                                <div class="block px-4 py-2 text-xs text-gray-400">
                                                    Manage Team
                                                </div>

                                                <!~~ Team Settings ~~>
                                                <jet-dropdown-link :href="route('teams.show', $page.props.user.current_team)">
                                                    Team Settings
                                                </jet-dropdown-link>

                                                <jet-dropdown-link :href="route('teams.create')" v-if="$page.props.jetstream.canCreateTeams">
                                                    Create New Team
                                                </jet-dropdown-link>

                                                <div class="border-t border-gray-100"></div>

                                                <!~~ Team Switcher ~~>
                                                <div class="block px-4 py-2 text-xs text-gray-400">
                                                    Switch Teams
                                                </div>

                                                <template v-for="team in $page.props.user.all_teams" :key="team.id">
                                                    <form @submit.prevent="switchToTeam(team)">
                                                        <jet-dropdown-link as="button">
                                                            <div class="flex items-center">
                                                                <svg v-if="team.id == $page.props.user.current_team_id" class="mr-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                                <div>{{ team.name }}</div>
                                                            </div>
                                                        </jet-dropdown-link>
                                                    </form>
                                                </template>
                                            </template>
                                        </div>
                                    </template>
                                </jet-dropdown>
                            </div>
                            -->

                            <!-- Settings Dropdown -->
                            <div class="ml-3 relative">
                                <jet-dropdown align="right" width="52">
                                    <template #trigger>
                                        <button class="inline-flex items-center py-3 border border-transparent text-sm leading-4 font-medium rounded-md text-amber-500 bg-white focus:outline-none transition">
                                            <div class="hidden sm:flex text-center mr-2">{{ $page.props.user.username }}</div>
                                            <img class="h-9 w-auto rounded-full object-cover" :src="$page.props.user.profile_photo_url"/>
                                            <font-awesome-icon icon="fa-solid fa-caret-down" class="ml-1 text-gray-700" />
                                        </button>
                                    </template>

                                    <template #content>
                                        <!-- Account Management -->
                                        <!-- <div class="block px-4 py-2 text-xs text-gray-400">
                                            Manage Account
                                        </div> -->
                                        <!-- <div class="sm:hidden sm:flex flex items-center px-4">
                                            <div>
                                               <div class="font-medium text-base text-gray-800">{{ $page.props.user.username }}</div>
                                               <div class="font-medium text-sm text-gray-500">{{ $page.props.user.email }}</div>
                                            </div>
                                        </div> -->

                                        <div v-if="$page.props.user.user_roles.includes(1)">
                                        <jet-dropdown-link :href="('/user/redirect')" class="items-center">
                                            <div class="inline-flex px-2 py-1">
                                                <div class="fa-icon-container">
                                                    <font-awesome-icon icon="fa-solid fa-screwdriver-wrench" class="text-amber-400 text-xlg" />
                                                </div>
                                                System Dashboard
                                            </div>
                                        </jet-dropdown-link>
                                        </div>

                                        <div class="border-t border-gray-100"></div>

                                        <div v-if="$page.props.user.user_roles.includes(2)">
                                        <jet-dropdown-link :href="('/user/redirect')" class="items-center">
                                            <div class="inline-flex px-2 py-1">
                                                <div class="fa-icon-container">
                                                    <font-awesome-icon icon="fa-solid fa-gem" class="text-amber-400 text-xlg" />
                                                </div>
                                                Publisher
                                            </div>
                                        </jet-dropdown-link>

                                        <jet-dropdown-link :href="('/user/redirect')" class="items-center">
                                            <div class="inline-flex px-2 py-1 pl-9">
                                                <!-- <div class="fa-icon-container">
                                                    <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-amber-400 text-xlg" />
                                                </div> -->
                                                Reports
                                            </div>
                                        </jet-dropdown-link>

                                        <jet-dropdown-link :href="('/user/redirect')" class="items-center">
                                            <div class="inline-flex px-2 py-1 pl-9">
                                                <!-- <div class="fa-icon-container">
                                                    <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-amber-400 text-xlg" />
                                                </div> -->
                                                Access Codes
                                            </div>
                                        </jet-dropdown-link>
                                        </div>

                                        <div class="border-t border-gray-100"></div>

                                        <jet-dropdown-link :href="('/user/redirect')" class="items-center">
                                            <div class="inline-flex px-2 py-1">
                                                <div class="fa-icon-container">
                                                    <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-amber-400 text-xlg" />
                                                </div>
                                                My Courses
                                            </div>
                                        </jet-dropdown-link>

                                        <jet-dropdown-link :href="route('profile.show')" class="items-center">
                                            <div class="inline-flex px-2 py-1">
                                                <div class="fa-icon-container">
                                                    <font-awesome-icon icon="fa-solid fa-wrench" class="text-amber-400 text-xlg" />
                                                </div>
                                                Profile
                                            </div>
                                        </jet-dropdown-link>

                                        <jet-dropdown-link :href="route('api-tokens.index')" class="items-center"  v-if="$page.props.jetstream.hasApiFeatures">
                                            <div class="inline-flex px-2 py-1">
                                                <div class="fa-icon-container">
                                                    <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-amber-400 text-xlg" />
                                                </div>
                                                API Tokens
                                            </div>
                                        </jet-dropdown-link>

                                        <div class="border-t border-gray-100"></div>

                                        <!-- Authentication -->
                                        <form @submit.prevent="logout">
                                            <jet-dropdown-link as="button" class="items-center"  >
                                                <div class="inline-flex px-2 py-1">
                                                    <div class="fa-icon-container">
                                                        <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="text-amber-400 text-xlg" />
                                                    </div>
                                                    Sign Out
                                                </div>
                                            </jet-dropdown-link>
                                        </form>
                                    </template>
                                </jet-dropdown>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}" class="sm:hidden">

                    <!-- Responsive Settings Options -->
                    <div class="pt-1 pb-2 border-b border-gray-200">
                        <div class="mt-3 space-y-1">
                            <a href="/webcourses/catalogue" class="py-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition">Webcourses</a>
                            <a href="https://publish.cultivatelearning.ca/" class="py-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition">Publish</a>
                            <a href="/webcourses/help" class="py-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition">Help</a>

                            <!-- Team management in hamburger menu
                            <!~~ Team Management ~~>
                            <template v-if="$page.props.jetstream.hasTeamFeatures">
                                <div class="border-t border-gray-200"></div>

                                <div class="block px-4 py-2 text-xs text-gray-400">
                                    Manage Team
                                </div>

                                <!~~ Team Settings ~~>
                                <jet-responsive-nav-link :href="route('teams.show', $page.props.user.current_team)" :active="route().current('teams.show')">
                                    Team Settings
                                </jet-responsive-nav-link>

                                <jet-responsive-nav-link :href="route('teams.create')" :active="route().current('teams.create')">
                                    Create New Team
                                </jet-responsive-nav-link>

                                <div class="border-t border-gray-200"></div>

                                <!~~ Team Switcher ~~>
                                <div class="block px-4 py-2 text-xs text-gray-400">
                                    Switch Teams
                                </div>

                                <template v-for="team in $page.props.user.all_teams" :key="team.id">
                                    <form @submit.prevent="switchToTeam(team)">
                                        <jet-responsive-nav-link as="button">
                                            <div class="flex items-center">
                                                <svg v-if="team.id == $page.props.user.current_team_id" class="mr-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <div>{{ team.name }}</div>
                                            </div>
                                        </jet-responsive-nav-link>
                                    </form>
                                </template>
                            </template>
                            -->

                        </div>
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
                <div class="py-8"><div class="border-t border-gray-200"></div></div>

                <!-- <div class="p-6">
                    <h1>$PAGE VARIABLE</h1>
                    <pre>{{ $page }}</pre>
                </div>

                <div class="py-8"><div class="border-t border-gray-200"></div></div>

                <div class="p-6">
                    <h1>$TEAM VARIABLE</h1>
                    <pre>{{ $team }}</pre>
                </div>
                -->
            </main>
        </div>
    </div>

</template>

<script>
    // import JetApplicationMark from '@/Jetstream/ApplicationMark'
    import JetBanner from '@/Jetstream/Banner'
    import JetDropdown from '@/Jetstream/Dropdown'
    import JetDropdownLink from '@/Jetstream/DropdownLink'
    import JetNavLink from '@/Jetstream/NavLink'
    import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink'

    export default {
        // name: 'App',
        components: {
            // JetApplicationMark,
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
