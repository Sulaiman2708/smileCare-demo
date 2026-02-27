import { db } from "./db";
import { contactMessages, type InsertContactMessage, type ContactMessage } from "@shared/schema";

export interface IStorage {
  createContactMessage(msg: InsertContactMessage): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(msg: InsertContactMessage): Promise<ContactMessage> {
    const [message] = await db.insert(contactMessages).values(msg).returning();
    return message;
  }
}

export const storage = new DatabaseStorage();