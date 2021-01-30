import { Patient } from "../../models/Patient";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { ApolloContext } from "../apolloContext";

@Resolver(Patient)
export class PatientResolver {

  @Query(() => [Patient])
  patients( @Ctx() { patients }: ApolloContext) {
    return patients.find({}, {populate: ['consultations']})
  }

  @Mutation(() => Patient)
  async createPatient(
    @Arg("name", () => String) name : string,
    @Ctx() { patients }: ApolloContext
  ) {
    const patient = patients.create({name});
    await patients.persistAndFlush(patient);
    return patient;
  }

}
