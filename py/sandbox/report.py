from sandbox.scoring import score
from sandbox.util import normalize


def report(name: str, points: list[float]) -> str:
    return f"{normalize(name)}: {score(points):g}"
