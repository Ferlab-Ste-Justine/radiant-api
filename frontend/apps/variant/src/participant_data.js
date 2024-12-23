export const participantData = {
  data: {
    participant: {
      hits: {
        total: 2397,
      },
      aggregations: {
        sex: {
          buckets: [
            {
              key: "male",
              doc_count: 1320,
            },
            {
              key: "female",
              doc_count: 1069,
            },
            {
              key: "unknown",
              doc_count: 8,
            },
          ],
        },
        ethnicity: {
          buckets: [
            {
              key: "Hispanic or Latino",
              doc_count: 2397,
            },
          ],
        },
        race: {
          buckets: [
            {
              key: "White",
              doc_count: 1144,
            },
            {
              key: "More Than One Race",
              doc_count: 495,
            },
            {
              key: "not available",
              doc_count: 441,
            },
            {
              key: "unknown",
              doc_count: 94,
            },
            {
              key: "NoInformation",
              doc_count: 87,
            },
            {
              key: "other",
              doc_count: 50,
            },
            {
              key: "Black or African American",
              doc_count: 42,
            },
            {
              key: "American Indian or Alaska Native",
              doc_count: 18,
            },
            {
              key: "Asian",
              doc_count: 16,
            },
            {
              key: "Native Hawaiian or Other Pacific Islander",
              doc_count: 6,
            },
            {
              key: "__missing__",
              doc_count: 4,
            },
          ],
        },
        family_type: {
          buckets: [
            {
              key: "proband-only",
              doc_count: 1470,
            },
            {
              key: "trio",
              doc_count: 804,
            },
            {
              key: "duo",
              doc_count: 116,
            },
            {
              key: "trio+",
              doc_count: 3,
            },
            {
              key: "duo+",
              doc_count: 2,
            },
            {
              key: "other",
              doc_count: 2,
            },
          ],
        },
      },
    },
  },
};
