package storage

import (
	"github.com/icyxp/imesh/api/model"
)

type Storage interface {
	Appender
	Querier
	Close() error
}

type Appender interface {
	Add(*model.Snapshot) error
}

type Querier interface {
	GetChunk(int64) (Chunk, error)
	GetLatestSnapshot() (*model.Snapshot, error)
}
