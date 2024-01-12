import { Suspense } from 'react';
import Table from '@/app/ui/customers/table';

export default function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
    <div>
        <p>Customers Page</p>
        <Suspense key={query + currentPage}>
                <Table query={query} currentPage={currentPage} />
        </Suspense>
    </div>
    );
}