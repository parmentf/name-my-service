# name-my-service

Help developers to name their new TDM web service, according to some rules and examples

## Installation

```bash
bun install
```

[ollama](https://ollama.com/) should be running on port 11434.

## Usage

```bash
./name.ts
```

### Examples

Avec `qwen3:0.6b`:

```bash
$ ./name.ts < to-be-named.txt 2> /dev/null
{"name": "psExtract", "description": "Extrait le texte d'un fichier PostScript."}

{"name": "sciencemetrixPolarity", "description": "Calcul de la polarité des citations d'un article scientifique."}

{"name": "istexInterrogation", "description": "Interroge la base ISTEX en langage naturel."}

{"name": "pdfApcoExtract", "description": "Extrait les informations d'une facture APC en PDF."}

{"name": "corpusSummarize", "description": "Résume un corpus de documents."}


{"name": "graphKnowledge", "description": "Creates a knowledge graph from a text."}

{"name":"authorsTools","description":"Détecte les outils que les auteurs d'un article scientifique citent et ont utilisés."}

{
  "name": "sciencedocTools",
  "description": "Extrait les logiciels utilisés dans un article scientifique."
}

{"name":"textSummarize","description":"Extraction d’entités nommées (Personnes, Localisations, Organismes et autres)"}

{
  "name": "semTermGen",
  "description": "Generates semantically proximate terms to enhance an ISTEX query."
}

{"name":"istexQuery","description":"Generates an ISTEX query from a natural language query."}
```

Avec `qwen3:8b`:

```bash
$ ./name.ts < to-be-named.txt 2> /dev/null
{
  "name": "psTextExtract"
  ,
  "description": "Extracts text from a PostScript file."
}

{
  "name": "citePolarityCheck",
  "description": "Calcule la polarité des citations d'un article scientifique."
}

{
  "name": "istexNlpQuery",
  "description": "Interroge la base ISTEX en langage naturel."
}

{
  "name": "apcPdfExtract"
  , "description": "Extrait les informations d'une facture APC en PDF."
}

{
  "name": "textSummarize"
  , "description": "Résumé automatique d’un article scientifique"
}

{
  "name": "textGraphBuild"
  , "description": "Crée un graphe de connaissages à partir d'un texte."
}

{
  "name": "toolUseDetect",
  "description": "Detects the tools cited by authors of a scientific article and used by them."
}

{
  "name": "softwareExtract"
  ,
  "description": "Extracts the software used in a scientific article."
}

{
  "name": "textNormalize",
  "description": "Normalisation d’un texte ou d’un terme"
}

{
  "name": "istexSynonymsGen"
  ,
  "description": "Génère des termes sémantiquement proches pour améliorer une requête ISTEX."
}

{
  "name": "naturalToIstex"
  ,
  "description": "Génère une requête ISTEX à partir d'une requête en langage naturel."
}

{
  "name": "citationGraphBuild"
  , "description": "Génère le graphe de citations d'un corpus de documents scientifiques."
}
```
