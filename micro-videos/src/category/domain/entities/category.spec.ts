import { Category } from "./category";
import { omit } from "lodash";
import UniqueEntityId from "../unique-entity-id.vo";

describe("Category Unit Tests", () => {
  test("should have a valid constructor", () => {
    let category = new Category({ name: "Movie" });
    let props = omit(category.props, "created_at");
    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
    });
    expect(category.props.created_at).toBeInstanceOf(Date);

    let created_at = new Date("2021-01-01");
    category = new Category({
      name: "Movie",
      description: "Description of Movie",
      is_active: false,
      created_at,
    });
    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "Description of Movie",
      is_active: false,
      created_at,
    });

    category = new Category({
      name: "Movie",
      description: "Description of Movie",
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      description: "Description of Movie",
    });

    category = new Category({
      name: "Movie",
      is_active: true,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      is_active: true,
    });

    category = new Category({
      name: "Movie",
      created_at,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      created_at,
    });
  });

  test("getter of name field", () => {
    const category = new Category({ name: "Movie" });
    expect(category.name).toBe("Movie");
  });

  test("getter and setter of description field", () => {
    let category = new Category({
      name: "Movie",
      description: "Description of Movie",
    });
    expect(category.description).toBe("Description of Movie");
    
    category = new Category({
      name: "Movie",
    });
    expect(category.description).toBeNull();

    category["description"] = "Description of Movie";
    expect(category.description).toBe("Description of Movie");

    category["description"] = undefined;
    expect(category.description).toBeNull();
  });

  test("id field", () => {
    let category = new Category({ name: "Movie" });
    expect(category.id).not.toBeUndefined();
    expect(category.id).not.toBeNull();
    // expect(uuidValidate(category.id)).toBeTruthy();

    const someUUID = new UniqueEntityId(); 
    category = new Category({ name: "Movie" }, someUUID);
    expect(category.id).toBe(someUUID);
  });
});
