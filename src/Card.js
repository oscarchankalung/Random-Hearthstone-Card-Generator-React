import $ from 'jquery';

class Card{

  constructor() {
    this.client_id = "f5ef9bd3e2444bfaba636329f2438a82";
    this.client_secret = "oymYHiN7qgMXOVNvVGUP22LT4PodTW6f";
    this.authorize_url = "https://us.battle.net/oauth/token";
    this.card_url = "https://us.api.blizzard.com/hearthstone/cards?locale=en_US";
    this.access_token = null;
  }

  // post access_token if null
  async getToken() {
    if (this.access_token === null) {
      let result;
      try {
        result = await $.ajax({
          type: "POST",
          url: this.authorize_url,
          data: {
            grant_type: "client_credentials",
            client_id: this.client_id,
            client_secret: this.client_secret
          }
        });
        this.access_token = result.access_token;
        console.log("access_token:", this.access_token);
      } catch (error) {
        console.log(error);
      }
    }
    return this.access_token;
  };

  // get cardCount
  async getCardCount() {
    let result;
    try {
      result = await $.ajax({
        type: "GET",
        url: this.card_url + "&setGroup=wild&pageSize=1",
        headers: {
          Authorization: "Bearer " + this.access_token
        }
      });
      console.log("cardCount:", result.cardCount);
      return result.cardCount;
    } catch (error) {
      console.log(error);
    }
  }

  // get card
  async getCard(cardPage) {
    let result;
    try {
      result =  await $.ajax({
        type: "GET",
        url: this.card_url + "&setGroup=wild&pageSize=1&page=" + cardPage,
        headers: {
          Authorization: "Bearer " + this.access_token
        }
      });
      console.log('cardPage:', cardPage);
      console.log('card:', result.cards[0].name);
      return result.cards[0];
    } catch (error) {
      console.log(error);
    }
  }

}

export default Card;
