import { Category } from "./category";
describe("Category Unit Tests", () => {
  test("should have a valid constructor", () => {
    const props = {
      name: "Movie",
      description: "Description of Movie",
      is_active: true,
      created_at: new Date("2021-01-01"),
    };

    const category = new Category(props);

    expect(category.props).toMatchObject(props);
    expect(category.props.name).toBe("Movie");
    expect(category.props.description).toBe("Description of Movie");
    expect(category.props.is_active).toBe(true);
    expect(category.props.created_at).toEqual(new Date("2021-01-01"));
  });
});
