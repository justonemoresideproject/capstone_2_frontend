export const NavItems = [
    {
        title: "Home",
        location: "/"
    },
    {
        title: "Products",
        location: "products"
    },
    {
        title: "Checkout",
        location: "checkout"
    }
]

export const AdminNavItems = [
    {
        title: "Admin",
        submenu: [
            {
                title: "Orders",
                location: 'orders'
            },
            {
                title: "Customers",
                location: 'customers'
            },
            {
                title: "Addresses",
                location: 'addresses'
            }
        ]
    }
]

export const UserNavItems = [
    {
        title: "My Stuff",
        submenu: [
            {
                title: "My Orders",
                location: "myOrders"
            },
            {
                title: "My Addresses",
                location: "myAddresses"
            },
            {
                title: "My Profile",
                location: "myProfile"
            }
        ]
    }
]

export const AuthNavItems = [
    {
        title: "Login",
        location: "login"
    },
    {
        title: "Register",
        location: "register"
    }
]