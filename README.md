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