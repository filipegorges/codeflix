import Entity from "@seedwork/entity/entity";
import UniqueEntityId from "@seedwork/value-objects/unique-entity-id.vo";
import { RepositoryInterface } from "./repository-contracts";

export default abstract class InMemoryRepository<E extends Entity>
  implements RepositoryInterface<E>
{
  items: E[] = [];

  async insert(entity: E): Promise<void> {
    this.items.push(entity);
  }
  async findById(id: string | UniqueEntityId): Promise<E> {
    const item = this.items.find((i) => i.id === `${id}`);
    if (!item) {
      throw new Error("Item not found");
    }
    return item;
  }
  async findAll(): Promise<E[]> {
    return this.items;
  }
  async update(entity: E): Promise<void> {
    this.items = this.items.map((item) =>
      item.id === entity.id ? entity : item
    );
  }
  async delete(id: string | UniqueEntityId): Promise<void> {
    this.items = this.items.filter((item) => item.id !== `${id}`);
  }
}
