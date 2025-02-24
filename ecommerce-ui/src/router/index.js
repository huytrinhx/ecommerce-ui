import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategory from '../views/Category/CategoryAdd.vue'
import CategoryView from '../views/Category/CategoryView.vue'
import EditCategory from '@/views/Category/EditCategory.vue'
import AddProduct from '@/views/Product/AddProduct.vue'
import Product from '@/views/Product/Product.vue'
import EditProduct from '@/views/Product/EditProduct.vue'
import ShowDetails from '@/views/Product/ShowDetails.vue'
import Signup from '@/views/Signup.vue'
import Signin from '@/views/Signin.vue'
import WishList from '@/views/Product/WishList.vue'
import Cart from '@/views/Cart/Cart.vue'
import PaymentSuccess from '@/views/Payment/PaymentSuccess.vue'
import FailedPayment from '@/views/Payment/FailedPayment.vue'
import Checkout from '@/views/Checkout.vue'
import OrderHistory from '@/views/Order/OrderHistory.vue'
import OrderDetails from '@/views/Order/OrderDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: "/admin/category/add",
      name: "AddCategory",
      component: AddCategory,
    },
    {
      path: "/admin/category",
      name: "AdminCategory",
      component: CategoryView,
    },
    {
      path: "/admin/category/:id",
      name: "EditCategory",
      component: EditCategory
    },
    {
      path: "/admin/product/add",
      name: "AddProduct",
      component: AddProduct,
    },
    {
      path: "/admin/product",
      name: "AdminProduct",
      component: Product,
    },
    {
      path: "/admin/product/:id",
      name: "EditProduct",
      component: EditProduct
    },
    {
      path : '/product/show/:id',
      name : 'ShowDetails',
      component: ShowDetails
    },
    {
      path : '/signup',
      name : 'Signup',
      component: Signup
    },
    {
      path : '/signin',
      name : 'Signin',
      component: Signin
    },
    {
      path: '/wishlist',
      name: 'WishList',
      component: WishList
    },
    {
      path: '/mycart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/payment/success',
      name: 'PaymentSuccess',
      component:PaymentSuccess
    },
    {
      path: '/payment/failed',
      name: 'FailedPayment',
      component:FailedPayment
    },
    {
      path : '/checkout',
      name : 'Checkout',
      component : Checkout
    },
    {
      path: '/orders',
      name: 'OrderHistory',
      component: OrderHistory
    },
    {
      path: '/order/:id',
      name: 'OrderDetails',
      component: OrderDetails
    }

  ]
})

export default router
