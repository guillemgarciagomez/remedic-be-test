import { Patient } from "../../models/Patient";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { ApolloContext } from "../apolloContext";

@Resolver(Patient)
export class PatientResolver {

  @Query(() => [Patient])
  patients( @Ctx() { em }: ApolloContext) {
    return em.find(Patient, {})
  }

  @Mutation(() => Patient)
  async createPatient(
    @Arg("name", () => String) name : string,
    @Ctx() { em }: ApolloContext
  ) {
    const patient = em.create(Patient, {name});
    await em.persistAndFlush(patient);
    return patient;
  }

}
