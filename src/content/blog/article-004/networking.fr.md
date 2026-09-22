---
title: "Un peu de réseau"
description: "WoL, Isolation, VPN"
date: "2026-08-31"
author: "Adrien"
---

# Intro
On a simulé notre mini parc, c'est merveilleux, c'est incroyable, mais!

Les VMs qui sont dans mon __proxmox__ ont la possibilité de ping ma tour de developpement.

Ce qui est un peu ennuyeux, car le but d'utiliser Proxmox était d'en faire un bac à sable, ou peut importe ce qui se passe dedans, ce ne soit pas vraiment un problème. Mais si, pour une raison x ou y, ça puisse avoir un impact sur mon réseau local, ça ne va pas le faire.

Donc il va falloir configurer le PareFeu de Proxmox

De plus, Je ne serais pas chez moi pendant un bout de temps, mais j'aimerais avoir la possibilité de travailler sur le projet malgré la distance, et pour ça, on va juste paramétrer un VPN et activer le wake-on-LAN

# Wake On LAN
Pour cette étape, rien de compliquer, juste aller dans le BIOS de la ThinkStation (F1) et aller dans les paramètre d'allumage, pour activer le Wake-On-LAN

J'aimerais toutefois mettre l'allumage dans mon sytème de domotique pour l'allumer simplement depuis mon téléphone, (A l'aide de MQTT et de NodeRed)

# VPN

Là dessus, je ne me suis pas embêter, la freebox propose un VPN wireguard

# Pare-Feu

Pour le Pare feu, sous proxmox, j'ai créer un `Security Group` que j'applique au routeur virtuel
