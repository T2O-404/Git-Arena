# Guide Formateur — Git Arena 🥊

## 🎛️ Setup recommandé
- Créez un repo “template” **privé** GitHub Classroom (ou distribuez le zip).
- Branches par défaut : `main` et `dev`.
- Donnez 20–30 min (10 min exécution + 10 min résolution + 10 min débrief).

## 🔍 Ce que vous voulez observer
- Les binômes qui **coordonnent** (peu ou pas de conflit).
- Ceux qui **cassent** (conflits multiples, messages flous).
- Leur capacité à **lire** les messages Git & à **nettoyer** correctement.
- Qualité des **messages de commit**.

## 🧭 Rubrique d’évaluation (suggestion /20)
- (6) Branches & Git Flow respectés
- (6) Commits (taille, clarté, fréquence)
- (4) Résolution de conflit (propreté)
- (4) PR (description, checklist, diff clair)

## 🧠 Débrief — Questions guidées
1. Où le conflit est-il apparu ? Pourquoi ?
2. Quelle **ligne** exacte a été modifiée des deux côtés ?
3. Quelle stratégie avez-vous utilisé ? (ré-écriture, mix des deux, rebase…)
4. Que ferez-vous **différemment** la prochaine fois ?

## 🛠️ Astuces
- Forcer un conflit : demandez à tous de modifier **la même ligne** de `<h1>` dans `index.html`.
- Montrer la vue “Timeline” d’une PR : illustre l’historique de décision.
- Bonus : faites une **manche 2** “sans parler”, puis une avec communication.

## 🧪 Extension (si plus de temps)
- Introduire `git rebase` vs `git merge` (avec schéma simple).
- Ajouter une règle “CODEOWNERS” sur `index.html` pour forcer la revue.
