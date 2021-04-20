import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { MainLayoutComponent } from "./shared/components/main-layout/main-layout.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      { path: "", redirectTo: "/", pathMatch: "full" },
      { path: "", component: HomePageComponent },
      {
        path: "service",
        loadChildren: () =>
          import("./service-page/service-page.module").then(
            (m) => m.ServicePageModule
          ),
      },
      {
        path: "products",
        loadChildren: () =>
          import("./products-page/products-page.module").then(
            (m) => m.ProductsPageModule
          ),
      },
      {
        path: "contacts",
        loadChildren: () =>
          import("./contacts-page/contacts-page.module").then(
            (m) => m.ContactsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: "enabled",
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
