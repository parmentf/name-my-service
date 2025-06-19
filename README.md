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

Avec `gemma3:12b`:

```bash
$ time ./name.ts < to-be-named.txt 2> /dev/null
{ "name": "postScriptExtract" , "description": "Extracts the text from a PostScript file."}

{ "name": "citationPolarityCheck" , "description": "Calculates the polarity of citations from a scientific article."}

{ "name": "istexQuery" , "description": "Interroge la base ISTEX en langage naturel."}

{ "name": "apcInfoExtract" , "description": "Extracts information from an APC invoice in PDF."}

{"name": "corpusSummarize", "description": "Résume un corpus de documents."}

{ "name": "knowledgeGraphBuild" , "description": "Crée un graphe de connaissances à partir d'un texte."}

{ "name": "toolCiteDetect" , "description": "Detects the tools that authors of a scientific article cite and use."}

{ "name": "softwareExtract" , "description": "Extracts the software used in a scientific article."}

{ "name": "serviceNameWeb", "description": "Names a new web service from its description." }

{ "name": "termExpand" , "description": "Génère des termes sémantiquement proches pour améliorer une requête ISTEX."}

{ "name": "istexQueryGenerate" , "description": "Génère une requête ISTEX à partir d'une requête en langage naturel."}

{ "name": "citationGraphGenerate" , "description": "Génère le graphe de citations d'un corpus de documents scientifiques."}

{ "name": "figureCaptionExtract" , "description": "Extracts the figure captions from a scientific article."}


real    1m20.266s
user    0m0.346s
sys     0m0.298s
```

Avec `phi4:14b`:

```bash
$ time ./name.ts < to-be-named.txt 2> /dev/null
{"name": "postscriptExtractText"

, "description": "Given the constraints and existing names, 'postscriptExtractText' effectively captures the functionality of extracting text from a PostScript file. The name is
 concise (17 characters), uses camelCase as required, does not include special characters or numbers, and ends with a verb ('Extract'). It's unique among the listed services, ensuring it adheres to all specified rules."                                                                                                                                       }
{"name": "citationPolarityCompute"

, "description": "Calculate the sentiment of citations in a scientific article."

}
{
  "name": "istexQuery",
  "description": "Queries the ISTEX database using natural language."
}
{"name": "extractApcInfo", "description": "Extracts information from an APC invoice in PDF format."}


{"name": "corpusSummarize"

, "description": "The provided description in French is 'Résume un corpus de documents.' When translated to English, it means 'Summarizes a collection of documents.'"

}
{ "name": "knowledgeGraphCreate" , "description": "Creates a knowledge graph from text." }


{
  "name": "toolDetect"
  , "description": "Detects tools that authors of a scientific paper cite and have used."
}
{"name": "softwareExtract", "description": "Extracts the software used in a scientific article."}


{"name": "webServiceNameAssign"

, "description": "Naming a New Web Service Based on Its Description."}
{"name": "semanticExpandQuery", "description": "Generates semantically related terms to improve an ISTEX query."}


{
  "name": "nlpToIstex",
  "description": "Generates an ISTEX query from a natural language query."
}
{
  "name": "citationGraphGenerate",
  "description": "Generates a citation graph for a collection of scientific documents."
}
{ "name": "legendExtract" , "description": "Extracts figure captions from a scientific article." }


{"name": "helloWorldGreet", "description": "This service simulates a basic greeting function, often used as an introductory exercise in programming. It essentially outputs or in
itiates a 'Hello World!' message."}                                                                                                                                              
real    0m44.066s
user    0m0.313s
sys     0m0.208s
```