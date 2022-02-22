// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class spaL1TransferEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("from", Value.fromBytes(Bytes.empty()));
    this.set("to", Value.fromBytes(Bytes.empty()));
    this.set("value", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalSupply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("count", Value.fromBigInt(BigInt.zero()));
    this.set("vestingReward", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("gasPrice", Value.fromBigInt(BigInt.zero()));
    this.set("gasUsed", Value.fromBigInt(BigInt.zero()));
    this.set("timeStamp", Value.fromString(""));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save spaL1TransferEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save spaL1TransferEvent entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("spaL1TransferEvent", id.toString(), this);
    }
  }

  static load(id: string): spaL1TransferEvent | null {
    return changetype<spaL1TransferEvent | null>(
      store.get("spaL1TransferEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value!.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get vestingReward(): BigDecimal {
    let value = this.get("vestingReward");
    return value!.toBigDecimal();
  }

  set vestingReward(value: BigDecimal) {
    this.set("vestingReward", Value.fromBigDecimal(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value!.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class wspaL1TransferEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("from", Value.fromBytes(Bytes.empty()));
    this.set("to", Value.fromBytes(Bytes.empty()));
    this.set("value", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalSupply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set(
      "arbitrumLockedBridgeBlance",
      Value.fromBigDecimal(BigDecimal.zero())
    );
    this.set("count", Value.fromBigInt(BigInt.zero()));
    this.set("vestingReward", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("gasPrice", Value.fromBigInt(BigInt.zero()));
    this.set("gasUsed", Value.fromBigInt(BigInt.zero()));
    this.set("timeStamp", Value.fromString(""));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save wspaL1TransferEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save wspaL1TransferEvent entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("wspaL1TransferEvent", id.toString(), this);
    }
  }

  static load(id: string): wspaL1TransferEvent | null {
    return changetype<wspaL1TransferEvent | null>(
      store.get("wspaL1TransferEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value!.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get arbitrumLockedBridgeBlance(): BigDecimal {
    let value = this.get("arbitrumLockedBridgeBlance");
    return value!.toBigDecimal();
  }

  set arbitrumLockedBridgeBlance(value: BigDecimal) {
    this.set("arbitrumLockedBridgeBlance", Value.fromBigDecimal(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get vestingReward(): BigDecimal {
    let value = this.get("vestingReward");
    return value!.toBigDecimal();
  }

  set vestingReward(value: BigDecimal) {
    this.set("vestingReward", Value.fromBigDecimal(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value!.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class spaL1Balance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("bootstrapLiquidity", Value.fromBigDecimal(BigDecimal.zero()));
    this.set(
      "bootstrapLiquidityDeployer",
      Value.fromBigDecimal(BigDecimal.zero())
    );
    this.set("privateSale", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("teamAdvisor", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("SperaxFoundation", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("StakingRewards", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("treasury", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("teamAdvisor2", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("timeStamp", Value.fromString(""));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save spaL1Balance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save spaL1Balance entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("spaL1Balance", id.toString(), this);
    }
  }

  static load(id: string): spaL1Balance | null {
    return changetype<spaL1Balance | null>(store.get("spaL1Balance", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get wSpaBalance(): string | null {
    let value = this.get("wSpaBalance");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set wSpaBalance(value: string | null) {
    if (!value) {
      this.unset("wSpaBalance");
    } else {
      this.set("wSpaBalance", Value.fromString(<string>value));
    }
  }

  get bootstrapLiquidity(): BigDecimal {
    let value = this.get("bootstrapLiquidity");
    return value!.toBigDecimal();
  }

  set bootstrapLiquidity(value: BigDecimal) {
    this.set("bootstrapLiquidity", Value.fromBigDecimal(value));
  }

  get bootstrapLiquidityDeployer(): BigDecimal {
    let value = this.get("bootstrapLiquidityDeployer");
    return value!.toBigDecimal();
  }

  set bootstrapLiquidityDeployer(value: BigDecimal) {
    this.set("bootstrapLiquidityDeployer", Value.fromBigDecimal(value));
  }

  get privateSale(): BigDecimal {
    let value = this.get("privateSale");
    return value!.toBigDecimal();
  }

  set privateSale(value: BigDecimal) {
    this.set("privateSale", Value.fromBigDecimal(value));
  }

  get teamAdvisor(): BigDecimal {
    let value = this.get("teamAdvisor");
    return value!.toBigDecimal();
  }

  set teamAdvisor(value: BigDecimal) {
    this.set("teamAdvisor", Value.fromBigDecimal(value));
  }

  get SperaxFoundation(): BigDecimal {
    let value = this.get("SperaxFoundation");
    return value!.toBigDecimal();
  }

  set SperaxFoundation(value: BigDecimal) {
    this.set("SperaxFoundation", Value.fromBigDecimal(value));
  }

  get StakingRewards(): BigDecimal {
    let value = this.get("StakingRewards");
    return value!.toBigDecimal();
  }

  set StakingRewards(value: BigDecimal) {
    this.set("StakingRewards", Value.fromBigDecimal(value));
  }

  get treasury(): BigDecimal {
    let value = this.get("treasury");
    return value!.toBigDecimal();
  }

  set treasury(value: BigDecimal) {
    this.set("treasury", Value.fromBigDecimal(value));
  }

  get teamAdvisor2(): BigDecimal {
    let value = this.get("teamAdvisor2");
    return value!.toBigDecimal();
  }

  set teamAdvisor2(value: BigDecimal) {
    this.set("teamAdvisor2", Value.fromBigDecimal(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class spaL1TotalSupplyEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("spaL1TotalSupply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("timeStamp", Value.fromString(""));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save spaL1TotalSupplyEvent entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save spaL1TotalSupplyEvent entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("spaL1TotalSupplyEvent", id.toString(), this);
    }
  }

  static load(id: string): spaL1TotalSupplyEvent | null {
    return changetype<spaL1TotalSupplyEvent | null>(
      store.get("spaL1TotalSupplyEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get spaL1TotalSupply(): BigDecimal {
    let value = this.get("spaL1TotalSupply");
    return value!.toBigDecimal();
  }

  set spaL1TotalSupply(value: BigDecimal) {
    this.set("spaL1TotalSupply", Value.fromBigDecimal(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class wSpaTotalSupplyEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("wSpaTotalSupply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("timeStamp", Value.fromString(""));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save wSpaTotalSupplyEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save wSpaTotalSupplyEvent entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("wSpaTotalSupplyEvent", id.toString(), this);
    }
  }

  static load(id: string): wSpaTotalSupplyEvent | null {
    return changetype<wSpaTotalSupplyEvent | null>(
      store.get("wSpaTotalSupplyEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get wSpaTotalSupply(): BigDecimal {
    let value = this.get("wSpaTotalSupply");
    return value!.toBigDecimal();
  }

  set wSpaTotalSupply(value: BigDecimal) {
    this.set("wSpaTotalSupply", Value.fromBigDecimal(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class wSpaBalanceEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set(
      "arbitrumLockedBridgeBlance",
      Value.fromBigDecimal(BigDecimal.zero())
    );
    this.set("timeStamp", Value.fromString(""));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save wSpaBalanceEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save wSpaBalanceEvent entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("wSpaBalanceEvent", id.toString(), this);
    }
  }

  static load(id: string): wSpaBalanceEvent | null {
    return changetype<wSpaBalanceEvent | null>(
      store.get("wSpaBalanceEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get arbitrumLockedBridgeBlance(): BigDecimal {
    let value = this.get("arbitrumLockedBridgeBlance");
    return value!.toBigDecimal();
  }

  set arbitrumLockedBridgeBlance(value: BigDecimal) {
    this.set("arbitrumLockedBridgeBlance", Value.fromBigDecimal(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}