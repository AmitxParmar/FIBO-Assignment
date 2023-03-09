import { dashboard, plans, dietPlans, members, logout, profile } from './assets'
import { addMembers, manageStaffs, setupGymBranch, manageSubscription } from './assets/QuickActions'


export const nav_links = [
    {
        id: '23d23',
        name: "Dashboard",
        icon: dashboard,
        path: "/dashboard"
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

export const quick_actions = [{
    id: 'xq9wb8',
    title: "Add Members",
    icon: addMembers
},
{
    id: 'xq9w3db8',
    title: "Manage Staffs",
    icon: manageStaffs
},
{
    id: "d32d34",
    title: "Set Up Gym branch",
    icon: setupGymBranch
},
{
    id: "dce34",
    title: "Manage Subscription Plans",
    icon: manageSubscription
}]