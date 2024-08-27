package main

import "leet-code/go/utils"

func scoreOfString(s string) int {
	score := 0

	for i := 0; i < len(s)-1; i++ {
		score += utils.Abs(int(s[i]) - int(s[i+1]))
	}

	return score
}