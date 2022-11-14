import { User } from "@/entities/User";

import { prisma } from "@/global/prismaClient";

import { IUsersRepository } from "../IUsersRepository";

export class PrismaUsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User | undefined> {
    const user = await prisma.user.findUnique({ where: { email } });

    return user || undefined;
  }

  async save(user: User): Promise<void> {
    await prisma.user.create({ data: user });
  };

  async listAll(): Promise<User[]> {
    const users = await prisma.user.findMany();

    return users;
  }
}
