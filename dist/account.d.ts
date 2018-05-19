import { ZeroEx, TransactionReceiptWithDecodedLogs } from '0x.js';
import { Ethereum } from './ethereum';
import { WalletType } from './types';
import { RadarSignedOrder, RadarFill, RadarToken } from 'radar-types';
import BigNumber from 'bignumber.js';
export declare class Account {
    address: string;
    private _wallet;
    private _ethereum;
    private _zeroEx;
    private _tokens;
    private _endpoint;
    constructor(ethereum: Ethereum, zeroEx: ZeroEx, apiEndpoint: string, tokens: Map<string, RadarToken>);
    readonly walletType: WalletType;
    exportSeedPhraseAsync(password: string): Promise<string>;
    exportAddressPrivateKeyAsync(password: string): Promise<string>;
    setAddressAsync(account: string | number): Promise<void>;
    getAvailableAddressesAsync(): Promise<string[]>;
    getEthBalanceAsync(): Promise<BigNumber>;
    transferEthAsync(to: string, amount: BigNumber, awaitTransactionMined?: boolean): Promise<TransactionReceiptWithDecodedLogs | string>;
    wrapEthAsync(amount: BigNumber, awaitTransactionMined?: boolean): Promise<TransactionReceiptWithDecodedLogs | string>;
    unwrapEthAsync(amount: BigNumber, awaitTransactionMined?: boolean): Promise<TransactionReceiptWithDecodedLogs | string>;
    getTokenBalanceAsync(token: string): Promise<BigNumber>;
    transferTokenAsync(token: string, to: string, amount: BigNumber, awaitTransactionMined?: boolean): Promise<TransactionReceiptWithDecodedLogs | string>;
    getTokenAllowanceAsync(token: string): Promise<BigNumber>;
    setTokenAllowanceAsync(token: string, amount: BigNumber, awaitTransactionMined?: boolean): Promise<TransactionReceiptWithDecodedLogs | string>;
    setUnlimitedTokenAllowanceAsync(token: string, awaitTransactionMined?: boolean): Promise<TransactionReceiptWithDecodedLogs | string>;
    getOrdersAsync(page?: number, perPage?: number): Promise<RadarSignedOrder[]>;
    getFillsAsync(page?: number, perPage?: number): Promise<RadarFill>;
    private _getWETHTokenAddress();
}