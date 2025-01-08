import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/common/HomePage'
import Layout from '../layouts/common/Layout'
import AuthLayout from '../layouts/auth/AuthLayout'
import AdminLayout from '../layouts/admin/AdminLayout'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import NotFoundPage from '../pages/other/NotFoundPage'
import ContactPage from '../pages/common/ContactPage'
import PrivacyPolicies from '../pages/common/PrivacyPolicies'
import TermAndConditionsPage from '../pages/common/TermAndConditionsPage'
import AboutUsPage from '../pages/common/AboutUsPage'
import ProfilePage from '../pages/common/ProfilePage'
import DashBoard from '../pages/admin/DashBoard'
import ShopLayout from '../layouts/common/ShopLayout'
import ShopPage from '../pages/shop/ShopPage'
import WorkersPage from '../pages/admin/WorkersPage'
import BusinessPage from '../pages/admin/BusinessPage'
import SaveRoom from '../pages/admin/SaveRoom'
import PublicationsPage from '../pages/admin/PublicationsPage'
import CenterCategories from '../pages/admin/categories/CenterCategories'
import ProductCategories from '../pages/admin/categories/ProductCategories'
import ViewWorkers from '../pages/admin/ViewWorkers'
import ViewBusiness from '../pages/admin/ViewBusiness'
import ViewPublicationsPage from '../pages/admin/ViewPublicationsPage'
import ViewProduct from '../pages/admin/ViewProduct'
import CategoriesPage from '../pages/admin/categories/CategoriesPage'
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/*Common Routes*/}
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/privacy" element={<PrivacyPolicies />} />
                    <Route path="/terms" element={<TermAndConditionsPage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>

                {/*Auth Routes*/}
                <Route element={<AuthLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>

                {/*Admin Routes*/}
                <Route element={<AdminLayout />}>
                    <Route path="/dashboard" element={<DashBoard />} />
                    <Route
                        path="/dashboard/add-worker"
                        element={<WorkersPage />}
                    />
                    <Route
                        path="/dashboard/add-worker/view-worker"
                        element={<ViewWorkers />}
                    />
                    <Route
                        path="/dashboard/business"
                        element={<BusinessPage />}
                    />
                    <Route
                        path="/dashboard/business/view-business"
                        element={<ViewBusiness />}
                    />
                    <Route
                        path="/dashboard/publication"
                        element={<PublicationsPage />}
                    />
                    <Route
                        path="/dashboard/publication/view-publication"
                        element={<ViewPublicationsPage />}
                    />
                    <Route path="/dashboard/save-room" element={<SaveRoom />} />
                    <Route
                        path="/dashboard/save-room/view-product"
                        element={<ViewProduct />}
                    />
                    <Route
                        path="/dashboard/categories"
                        element={<CategoriesPage />}
                    />

                    <Route
                        path="/center-categories"
                        element={<CenterCategories />}
                    />
                    <Route
                        path="/product-categories"
                        element={<ProductCategories />}
                    />
                </Route>

                {/*Shop Routes*/}
                <Route element={<ShopLayout />}>
                    <Route path="/shop" element={<ShopPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
