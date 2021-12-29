package cachemock

import (
	cache "github.com/icyxp/imesh/api/cache"
	mock "github.com/stretchr/testify/mock"

	storage "github.com/icyxp/imesh/api/storage"
)

// Cache is an autogenerated mock type for the Cache type
type Cache struct {
	mock.Mock
}

// Get provides a mock function with given fields: _a0
func (_m *Cache) Get(_a0 int64) storage.Chunk {
	ret := _m.Called(_a0)

	var r0 storage.Chunk
	if rf, ok := ret.Get(0).(func(int64) storage.Chunk); ok {
		r0 = rf(_a0)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(storage.Chunk)
		}
	}

	return r0
}

// Put provides a mock function with given fields: _a0, _a1
func (_m *Cache) Put(_a0 int64, _a1 storage.Chunk) bool {
	ret := _m.Called(_a0, _a1)

	var r0 bool
	if rf, ok := ret.Get(0).(func(int64, storage.Chunk) bool); ok {
		r0 = rf(_a0, _a1)
	} else {
		r0 = ret.Get(0).(bool)
	}

	return r0
}

// Reset provides a mock function with given fields:
func (_m *Cache) Reset() {
	_m.Called()
}

var _ cache.Cache = (*Cache)(nil)