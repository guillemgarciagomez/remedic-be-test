import { Entity, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType, Int } from "type-graphql";
import { Consultation } from "./Consultation";

@ObjectType()
@Entity()
export class Patient {

  @Field(() => Int)
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property()
  name!: string;

  @Field(() => [Consultation])
  @OneToMany( () => Consultation, consultation => consultation.patient)
  consultations!: Consultation[];
}
