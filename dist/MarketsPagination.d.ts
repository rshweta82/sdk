import { BaseAccount } from './accounts/BaseAccount';
import { Market } from './Market';
import { Trade } from './Trade';
export declare class MarketsPagination<T extends BaseAccount> {
    page: number;
    perPage: number;
    markets: Map<string, Market<T>>;
    private _endpoint;
    private _wsEndpoint;
    private _trade;
    constructor(initialPage: number, perPage: number, apiEndpoint: string, wsEndpoint: string, trade: Trade<T>);
    fetchPage(page: number, count: number): Promise<Map<string, Market<T>>>;
    fetchNextPage(): Promise<Map<string, Market<T>>>;
}
