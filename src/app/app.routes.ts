import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyComponent } from './company/company.component';
import { UserComponent } from './user/user.component';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { VendorComponent } from './vendor/vendor.component';
import { CustomerComponent } from './customer/customer.component';
import { ItemComponent } from './item/item.component';
import { PayrollComponent } from './payroll/payroll.component';
import { EmployeeComponent } from './employee/employee.component';
import { TaxCodeComponent } from './tax-code/tax-code.component';
import { AuditLogComponent } from './audit-log/audit-log.component';
import { HomeComponent } from './home/home.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            // Add more public routes here if necessary
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
