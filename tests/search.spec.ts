import { test, expect } from "@playwright/test";

enum Namespace {
  // Main data
  uniprotkb = "uniprotkb",
  uniref = "uniref",
  uniparc = "uniparc",
  proteomes = "proteomes",
  // Supporting data
  taxonomy = "taxonomy",
  keywords = "keywords",
  citations = "citations",
  diseases = "diseases",
  database = "database",
  locations = "locations",
  // Annotations
  unirule = "unirule",
  arba = "arba",
}

const searchableNamespaceLabels: Record<Namespace, string> = {
  // Main data
  [Namespace.uniprotkb]: "UniProtKB",
  [Namespace.uniref]: "UniRef",
  [Namespace.uniparc]: "UniParc",
  [Namespace.proteomes]: "Proteomes",
  // Supporting data
  [Namespace.taxonomy]: "Taxonomy",
  [Namespace.keywords]: "Keywords",
  [Namespace.citations]: "Literature citations",
  [Namespace.diseases]: "Human diseases",
  [Namespace.database]: "Cross-referenced databases",
  [Namespace.locations]: "Subcellular location32434s",
  // Annotations
  [Namespace.unirule]: "UniRule",
  [Namespace.arba]: "ARBA",
};

for (const [namespace, string] of Object.entries(Namespace)) {
  test(`${namespace} * search`, async ({ page }) => {
    await page.goto(`https://www.uniprot.org/${string}?query=*`);
    await expect(
      page.getByText(
        new RegExp(
          `${searchableNamespaceLabels[namespace]} [0-9,]+ results`,
          "i"
        )
      )
    ).toBeVisible();
  });
}
