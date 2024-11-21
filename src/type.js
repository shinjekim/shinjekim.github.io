"use strict";

new TypeIt(".home__title--strong", {
  loop: true,
  speed: 200,
})
  .pause(1000)
  .delete()
  .move(null, { to: "END" })
  .delete()
  .type("Full-stack Engineer")
  .pause(2000)
  .delete()
  .go();
