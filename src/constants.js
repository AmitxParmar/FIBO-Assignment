import { plans } from './assets'
import { dashboard, dietPlans, members, logout, profile } from './assets'
export const nav_links = [
    {
        id: '23d23',
        name: "Dashboard",
        icon: dashboard,
        path: "/"
    },
    {
        id: '234vc',
        name: "Members",
        icon: members,
        path: "/members"
    },
    {
        id: '23asd3d23',
        name: "Exercise Plans",
        icon: plans,
        path: "/exercise-plans"
    },
    {
        id: '23vg5d23',
        name: "Diet Plans",
        icon: dietPlans,
        path: "/diet-plans"
    },
    {
        id: 'c4d23',
        name: "Profile",
        icon: profile,
        path: "/profile/:id"
    },
    {
        id: 'xq9wb8',
        name: "Logout",
        icon: logout
    },
]