from dataclasses import dataclass


@dataclass
class Dataset(object):
    context: str
    f_name: str
    cost: object
    index: object
    id: str
    label: str

    @property
    def context(self) -> str: return self._context

    @context.setter
    def context(self, context): self._context = context

    @property
    def f_name(self) -> str: return self._f_name

    @f_name.setter
    def f_name(self, f_name): self._f_name = f_name

    @property
    def cost(self) -> object: return self._cost

    @cost.setter
    def cost(self, cost): self._cost = cost

    @property
    def index(self) -> object: return self._index

    @index.setter
    def index(self, index): self._index = index

    @property
    def id(self) -> str: return self._id

    @id.setter
    def id(self, id): self._id = id

    @property
    def label(self) -> str: return self._label

    @label.setter
    def label(self, label): self._label = label