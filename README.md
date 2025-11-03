# Git Arena 🥊 — Exercice collaboratif (binômes)

Objectif : vivre un vrai workflow Git (branches, commits, pull/merge, résolution de conflits) et comprendre comment **éviter** ces conflits.

## 🔧 Pré-requis
- Git installé
- VS Code (ou un éditeur équivalent)
- Un compte GitHub *facultatif* (sinon travail en local)

## 🧪 Scénario rapide
Deux devs (A & B) partent de la même base :
- A crée `feature/prenom` et implémente une petite amélioration.
- B crée `fix/prenom` et corrige un mini bug.
- Les deux modifient **au moins une même ligne** (dans `index.html` *ou* dans `team.md`) pour provoquer un conflit **contrôlé**.
- Chacun fait **3 petits commits**.
- Ils ouvrent une Pull Request vers `dev` (ou font `git merge dev` en local).
- Ils **résolvent** le conflit et finalisent la fusion.

Le premier binôme à fusionner proprement **sans casser** le projet **gagne** ✅

---

## 🚀 Démarrage (élèves)

### 1) Cloner et préparer
```bash
git clone <URL_DU_REPO_OU_DU_ZIP_DECOMPRESSE>
cd git-arena
git checkout -b dev
git push -u origin dev  # (si repo GitHub) sinon ignorer
```

### 2) Création des branches binôme
- Dev A :
```bash
git checkout -b feature/prenomA
```
- Dev B :
```bash
git checkout -b fix/prenomB
```

### 3) Travail demandé (par personne)
Faites **3 petits commits** minimum :
- modifiez **1 ligne commune** (titre `index.html` OU entrée `team.md`)
- ajoutez/éditez un paragraphe différent
- mettez à jour `CHANGELOG.md`

Exemple de messages :
```
feat(home): change page title
fix(team): correct typo in role label
docs(changelog): add entry for v0.0.1-A
```

### 4) Synchroniser et fusionner
> Choisissez l’une des 2 options (PR GitHub **recommandé**)

**Option A — Pull Request GitHub**
```bash
git push -u origin feature/prenomA   # (ou fix/prenomB)
# Sur GitHub: "Compare & pull request" -> base: dev  compare: votre branche
```

**Option B — Merge local**
```bash
git checkout dev
git pull
git merge feature/prenomA   # (puis)
git merge fix/prenomB
```

### 5) Résoudre un conflit
Dans les fichiers marqués en conflit :
```
<<<<<<< HEAD
Votre version
=======
Version distante
>>>>>>> nom-de-branche
```
- Choisissez/éditez la version correcte
- Supprimez les délimiteurs `<<<<<<< ======= >>>>>>>`
- Enregistrez, puis :
```bash
git add .
git commit
git push
```

---

## 🧠 Débrief (checklist)
- Qui a eu un conflit ? Sur quel fichier/ligne ?
- Qu’avez-vous fait pour le résoudre ?
- Comment l’éviter la prochaine fois ?
  - petits commits, `git pull` avant `push`, communication, fichiers “sensibles”, Git Flow (feature -> dev -> main)

---

## 🏆 Score & variantes
- **1 point** : 3 commits clairs/personne
- **1 point** : PR ouverte avec template rempli
- **1 point** : merge propre (historique lisible)
- **+1 bonus** : zéro conflit (très bonne communication) *ou* conflit résolu du premier coup

Variante “Zen mode” : 5 minutes **sans parler** → refaites une manche **avec** communication et comparez.

Bon game !