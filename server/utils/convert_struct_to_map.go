package utils

import "reflect"

func isZeroValue(value reflect.Value) bool {
	switch value.Kind() {
	case reflect.Ptr, reflect.Interface:
		return value.IsNil()
	case reflect.Struct:
		return reflect.DeepEqual(value.Interface(), reflect.Zero(value.Type()).Interface())
	default:
		return value.Interface() == reflect.Zero(value.Type()).Interface()
	}
}

func StructToMap(obj interface{}) map[string]interface{} {
	result := make(map[string]interface{})
	val := reflect.ValueOf(obj)
	if val.Kind() == reflect.Ptr {
		val = val.Elem()
	}
	typ := val.Type()

	for i := 0; i < val.NumField(); i++ {
		field := val.Field(i)
		fieldName := typ.Field(i).Name

		if !isZeroValue(field) {
			if field.Kind() == reflect.Struct {
				fieldValue := StructToMap(field.Interface())
				if len(fieldValue) > 0 {
					result[fieldName] = fieldValue
				}
			} else {
				result[fieldName] = field.Interface()
			}
		}
	}

	return result
}
