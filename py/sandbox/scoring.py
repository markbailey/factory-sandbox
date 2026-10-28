from sandbox.util import clamp


def score(points: list[float]) -> float:
    return clamp(sum(points), 0, 10)
