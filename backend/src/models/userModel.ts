import { prop, modelOptions, getModelForClass } from '@typegoose/typegoose';

class ShippingAddress {
  @prop()
  public fullName?: string;
  @prop()
  public address?: string;
  @prop()
  public city?: string;
  @prop()
  public postalCode?: string;
  @prop()
  public country?: string;
  @prop()
  public lat?: string;
  @prop()
  public lng?: string;
}

@modelOptions({ schemaOptions: { timestamps: true } })
export class User {
  public _id?: string;

  @prop({ required: true })
  public name!: string;

  @prop({ required: true, unique: true })
  public email!: string;

  @prop({ required: true })
  public password!: string;

  @prop({ required: true, default: false })
  public isAdmin!: boolean;

  @prop()
  public shippingAddress?: ShippingAddress;

  @prop()
  public paymentMethod?: string;
}

export const UserModel = getModelForClass(User);
