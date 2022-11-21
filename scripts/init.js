const _init_systemEffect = async () => {
  game.wfrp4e.config.systemEffects.foodCarencesIndex = {
    label: "Carences Alimentaire (Indice)",
    icon: "",
    flags: {
      wfrp4e: {
        "effectTrigger": "prePrepareData",
        "effectApplication": "actor",
        "script": ``
      }
    }
  };

  game.wfrp4e.config.systemEffects.foodCarencesEffect = {
    label: "Carences Alimentaire (Effet)",
    icon: "icons/consumables/food/plate-fish-bowl-bones-brown.webp",
    flags: {
      wfrp4e: {
        "effectTrigger": "prePrepareData",
        "effectApplication": "actor",
        "script": `
            args.actor.characteristics.s.modifier += -5;
            args.actor.characteristics.t.modifier += -5;`
      }
    }
  };
  
  game.wfrp4e.config.systemEffects.goodFood = {
    label: "Bien Portant",
    icon: "icons/consumables/food/bowl-stew-brown.webp",
    flags: {
      wfrp4e: {
        "effectTrigger": "prePrepareData",
        "effectApplication": "actor",
        "script": `
            args.actor.characteristics.t.modifier += 10;`
      }
    }
  };

  game.wfrp4e.config.systemEffects.dirtyFighting = {
    label: "Combat Déloyal",
    icon: "icons/skills/melee/unarmed-punch-fist-blue.webp",
    flags: {
      wfrp4e: {
        "effectTrigger": "prePrepareItem",
        "effectApplication": "actor",
        "script": `
        if (args.item.type == "weapon" && args.item.weaponGroup.value == "brawling")
        {
            let advances = this.actor.itemCategories.talent.find(x => (x.name == "Combat déloyal" || "Dirty Fighting")).Advances;
            args.item.damage.value += (" + " + advances)
        }`
      }
    }
  };
  
  ChatMessage.create({
    content: "<div>L'initialisation des Règles Personnalisées est terminée</div>",
    user: game.user.id,
    whisper: ChatMessage.getWhisperRecipients("GM")
  });
};

Hooks.on('ready',()=>{

  setTimeout(_init_systemEffect, 22000, false, true);
        
})