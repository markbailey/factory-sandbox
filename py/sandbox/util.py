"""Core helpers imported by the other modules."""


def clamp(value: float, low: float, high: float) -> float:
    return max(low, min(high, value))


def normalize(name: str) -> str:
    return name.strip().lower()
