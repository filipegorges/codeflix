import Entity from "../../entity/entity";
import InMemoryRepository from "../in-memory.repository";

type StubEntityProps = {
    name: string
    price: number;
}

class StubEntity extends Entity<StubEntityProps> { }

class StubInMemoryRepository extends InMemoryRepository<StubEntity> {}

describe("InMemoryRepository", () => {
    let repository: StubInMemoryRepository;

    beforeEach(() => {
        repository = new StubInMemoryRepository();
    });

    it('should insert a new entity', async () => {
        const entity = new StubEntity({ name: 'name value', price: 5 });
        await repository.insert(entity);
        expect(repository.items).toHaveLength(1);
        expect(entity.toJSON()).toStrictEqual(repository.items[0].toJSON());
    });

    it('should throw error when entity not found', async () => {
        expect(repository.findById('1')).rejects.toThrowError();
    });

    it('should find entity by id', async () => {
        const entity = new StubEntity({ name: 'name value', price: 5 });
        await repository.insert(entity);
        const result = await repository.findById(entity.id);
        expect(result).toStrictEqual(entity);
    });

    it('should find all entities', async () => {
        const entity1 = new StubEntity({ name: 'name value', price: 5 });
        const entity2 = new StubEntity({ name: 'name value', price: 5 });
        await repository.insert(entity1);
        await repository.insert(entity2);
        const result = await repository.findAll();
        expect(result).toHaveLength(2);
    });

    it('should update entity', async () => {
        const entity = new StubEntity({ name: 'name value', price: 5 });
        await repository.insert(entity);
        entity.props.name = 'new name value';
        await repository.update(entity);
        const result = await repository.findById(entity.id);
        expect(result).toStrictEqual(entity);
    });

    it('should delete entity', async () => {
        const entity = new StubEntity({ name: 'name value', price: 5 });
        await repository.insert(entity);
        await repository.delete(entity.id);
        expect(repository.items).toHaveLength(0);
    });
});