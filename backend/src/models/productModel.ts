import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

class StockItem {
  @prop({ required: true })
  public size!: number;
  @prop({ required: true })
  public qty!: number;
}

@modelOptions({ schemaOptions: { timestamps: true } })
export class Product {
  public _id?: string;

  @prop({ required: true })
  public name!: string;

  @prop({ required: true, unique: true })
  public slug!: string;

  @prop({ required: true })
  public image!: string;

  @prop({ required: true })
  public brand!: string;

  @prop({ required: true })
  public category!: string;

  @prop({ required: true })
  public description!: string;

  @prop({ required: true, default: 0 })
  public price!: number;

  @prop({ required: true })
  public countInStock!: StockItem[];

  @prop({ required: true, default: 0 })
  public rating!: number;

  @prop({ required: true, default: 0 })
  public numReviews!: number;
}

export const ProductModel = getModelForClass(Product);
