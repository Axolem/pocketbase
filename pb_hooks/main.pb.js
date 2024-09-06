/// <reference path="../pb_data/types.d.ts" />

routerAdd(
	"GET",
	"/hello",
	(c) => {
		try {
			const result = arrayOf(
				new DynamicModel([
					{
						id: "",
						name: "",
					},
				])
			);

			$app.dao()
				.db()
				.select("test.id as id", "test.name as name")
				.from("case")
				.innerJoin("test", $dbx.exp("test.id = test"))
				.where($dbx.exp("test.id = {:id}", { id: "v7pyb4tgbb4ibg6" }))
				.all(result);

			return c.json(200, result);
		} catch (error) {
			console.error(error);
			return c.string(500, "Internal server error");
		}
	},
	$apis.activityLogger($app)
);
routerAdd("GET", "/hello/:name", (c) => {
	const name = c.pathParam("name");

	return c.json(200, { message: `Hello ${name}` });
});
