django filter 插件

`pip install django-filter`

```python
import django_filters
from .model import YourModel


class SnippetFilter(django_filters.FilterSet):
    
    class Meta:
        model = YourModel
        fields = ('xxx', 'aaaa')
```

django bootstrap-from插件

`pip install django-bootstrap-form`

```python
# setting.py
INSTALLED_APPS = [
    'django_filters',
    'bootstrapform'
]
```
