import { Routes } from '@angular/router';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { CompanyComponent } from './private/company/company.component';
import { UserComponent } from './private/user/user.component';
import { AccountComponent } from './private/account/account.component';
import { TransactionComponent } from './private/transaction/transaction.component';
import { InvoiceComponent } from './private/invoice/invoice.component';
import { VendorComponent } from './private/vendor/vendor.component';
import { CustomerComponent } from './private/customer/customer.component';
import { ItemComponent } from './private/item/item.component';
import { PayrollComponent } from './private/payroll/payroll.component';
import { EmployeeComponent } from './private/employee/employee.component';
import { TaxCodeComponent } from './private/tax-code/tax-code.component';
import { AuditLogComponent } from './private/audit-log/audit-log.component';
import { HomeComponent } from './public/home/home.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AboutUsComponent } from './public/about-us/about-us.component';
import { LoginPopupComponent } from './shared/login-popup/login-popup.component';
import { SignUpComponent } from './shared/sign-up/sign-up.component';

export const routes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'signup', component: SignUpComponent },
            { path: 'about-us', component: AboutUsComponent }



        ],
    },
    {
        path: 'app',
        component: PrivateLayoutComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'companies', component: CompanyComponent },
            { path: 'users', component: UserComponent },
            { path: 'accounts', component: AccountComponent },
            { path: 'transactions', component: TransactionComponent },
            { path: 'invoices', component: InvoiceComponent },
            { path: 'vendors', component: VendorComponent },
            { path: 'customers', component: CustomerComponent },
            { path: 'items', component: ItemComponent },
            { path: 'payrolls', component: PayrollComponent },
            { path: 'employees', component: EmployeeComponent },
            { path: 'tax-codes', component: TaxCodeComponent },
            { path: 'audit-logs', component: AuditLogComponent },
        ],
    },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' }

];
