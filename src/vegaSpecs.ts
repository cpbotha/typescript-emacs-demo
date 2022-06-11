export const barSpec = {
  width: 400,
  height: 200,
  mark: "bar",
  encoding: {
    x: { field: "a", type: "ordinal" },
    y: { field: "b", type: "quantitative" },
  },
  data: { name: "table" }, // note: vega-lite data attribute is a plain object instead of an array
};

export const barData = {
  table: [
    { a: "A", b: 28 },
    { a: "B", b: 55 },
    { a: "C", b: 43 },
    { a: "D", b: 91 },
    { a: "E", b: 81 },
    { a: "F", b: 53 },
    { a: "G", b: 19 },
    { a: "H", b: 87 },
    { a: "I", b: 52 },
  ],
};

export const imdbSpec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  description: "A dashboard with cross-highlighting.",
  data: { url: "https://vega.github.io/editor/data/movies.json" },
  vconcat: [
    {
      layer: [
        {
          mark: "rect",
          encoding: {
            x: {
              bin: { maxbins: 10 },
              field: "IMDB Rating",
            },
            y: {
              bin: { maxbins: 10 },
              field: "Rotten Tomatoes Rating",
            },
            color: {
              aggregate: "count",
              legend: {
                title: "All Movies Count",
                direction: "horizontal",
                gradientLength: 120,
              },
            },
          },
        },
        {
          transform: [
            {
              filter: { param: "pts" },
            },
          ],
          mark: "point",
          encoding: {
            x: {
              bin: { maxbins: 10 },
              field: "IMDB Rating",
            },
            y: {
              bin: { maxbins: 10 },
              field: "Rotten Tomatoes Rating",
            },
            size: {
              aggregate: "count",
              legend: { title: "Selected Category Count" },
            },
            color: {
              value: "#666",
            },
          },
        },
      ],
    },
    {
      width: 330,
      height: 120,
      mark: "bar",
      params: [
        {
          name: "pts",
          select: { type: "point", encodings: ["x"] },
        },
      ],
      encoding: {
        x: { field: "Major Genre", axis: { labelAngle: -40 } },
        y: { aggregate: "count" },
        color: {
          condition: {
            param: "pts",
            value: "steelblue",
          },
          value: "grey",
        },
      },
    },
  ],
  resolve: {
    legend: {
      color: "independent",
      size: "independent",
    },
  },
};
