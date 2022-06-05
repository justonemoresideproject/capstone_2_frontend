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
        title: "My Stuff",
        submenu: [
            {
                title: "My Orders",
                location: "myOrders"
            },
            {
                title: "My Addresses",
                location: "myCustomers"
            },
            {
                title: "My Profile",
                location: "myProfile"
            }
        ]
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