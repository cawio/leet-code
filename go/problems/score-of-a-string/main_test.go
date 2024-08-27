package main

import (
	"reflect"
	"testing"
)

func TestScoreOfString(t *testing.T) {
	type args struct {
		s string
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{"case1", args{"hello"}, 13},
		{"case2", args{"zaz"}, 50},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := scoreOfString(tt.args.s); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("scoreOfString() = %v, want %v", got, tt.want)
			}
		})
	}
}