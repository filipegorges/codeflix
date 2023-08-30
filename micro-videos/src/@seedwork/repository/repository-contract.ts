import Entity from "@seedwork/entity/entity";
import UniqueEntityId from "@seedwork/value-objects/unique-entity-id.vo";

export default interface RepositoryInterface<E extends Entity> {
  insert(entity: E): Promise<void>;
  findById(id: string | UniqueEntityId): Promise<E>;
  findAll(): Promise<E[]>;
  update(entity: E): Promise<void>;
  delete(id: string | UniqueEntityId): Promise<void>;
}
