import {
  prop,
  modelOptions,
  Ref,
  getModelForClass,
} from '@typegoose/typegoose';
import { User } from './userModel';
import { Product } from './productModel';

export class Item {
  @prop({ required: true })
  public name!: string;
  @prop({ required: true })
  public quantity!: number;
  @prop({ required: true })
  public size!: number;
  @prop({ required: true })
  public image!: string;
  @prop({ required: true })
  public price!: number;
  @prop({ required: true })
  public product?: Ref<Product>;
}

export class ShippingAddress {
  @prop()
  public fullName?: string;
  @prop()
  public address?: string;
  @prop()
  public city?: string;
  @prop()
  public country?: string;
  @prop()
  public postalCode?: string;
  @prop()
  public lat?: string;
  @prop()
  public lng?: string;
}

class PaymentResult {
  @prop()
  public paymentId!: string;
  @prop()
  public status!: string;
  @prop()
  public update_time!: string;
  @prop()
  public email_address!: string;
}

@modelOptions({ schemaOptions: { timestamps: true } })
export class Order {
  public _id!: string;

  @prop()
  public orderItems!: Item[];

  @prop()
  public shippingAdress?: ShippingAddress;

  @prop()
  public paymentMethod?: string;

  @prop({ ref: () => User })
  public user?: Ref<User>;

  @prop()
  public paymentResult?: PaymentResult;

  @prop({ required: true, default: 0 })
  public itemsPrice!: number;
  @prop({ required: true, default: 0 })
  public shippingPrice!: number;
  @prop({ required: true, default: 0 })
  public taxPrice!: number;
  @prop({ required: true, default: 0 })
  public totalPrice!: number;
  @prop({ required: true, default: false })
  public isPaid!: boolean;
  @prop()
  public paidAt!: Date;
  @prop({ required: true, default: false })
  public isDelivered!: boolean;
  @prop()
  public deliveredAt!: Date;
}

export const OrderModel = getModelForClass(Order);
