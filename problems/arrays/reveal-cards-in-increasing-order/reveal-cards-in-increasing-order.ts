/**
 * You are given an integer array deck. There is a deck of cards where every card has a unique integer.
 * The integer on the ith card is deck[i].
 * You can order the deck in any order you want. Initially, all the cards start face down (unrevealed) in one deck.
 * You will do the following steps repeatedly until all cards are revealed:
 *
 * Take the top card of the deck, reveal it, and take it out of the deck.
 * If there are still cards in the deck then put the next top card of the deck at the bottom of the deck.
 * If there are still unrevealed cards, go back to step 1. Otherwise, stop.
 *
 * Return an ordering of the deck that would reveal the cards in increasing order.
 *
 * see: https://leetcode.com/problems/reveal-cards-in-increasing-order/
 */
export function deckRevealedIncreasing(deck: number[]): number[] {
    deck.sort((a, b) => a - b);
    const result: number[] = [];
    while (deck.length) {
        result.unshift(deck.pop()!);
        if (deck.length) {
            result.unshift(result.pop()!);
        }
    }

    return result;
};